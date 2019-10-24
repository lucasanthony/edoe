package com.edoe.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.edoe.Model.Doador;
import com.edoe.Model.Item;
import com.edoe.Model.Role;
import com.edoe.Model.Usuario;
import com.edoe.Repository.ItemDAO;
import com.edoe.Repository.RoleRepository;
import com.edoe.Repository.UsuarioDAO;

@Service
public class UsuarioService implements UserDetailsService{
	
	@Autowired
	private UsuarioDAO usuarioDAO;
	
	@Autowired
	private ItemDAO itemDAO;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder bCryptPasswordEncoder;

	public void insereUsuario(Usuario usuario) {
		usuarioDAO.save(usuario);
	}

	// FUNCIONANDO MAS O EASY ACCEPT NN TA RECONHECENDO, TESTEI NO POSTMAN
	public Usuario adicionaDoador(Doador doador) throws Exception {
	
		if(verificaSeJaExiste(doador.getId()))
			throw new Exception("Usuario ja existente: " + doador.getId());
		
		//ClasseUsuario classeUser = ClasseUsuario.valueOf(classe);
		//Usuario doador = new Doador(id, nome, email, celular, classeUser);
		try {
		    doador.setPassword(bCryptPasswordEncoder.encode(doador.getPassword()));
		    doador.setEnabled(true);
		    Role userRole = roleRepository.findByRole("ADMIN");
		    Role doadorRole = roleRepository.findByRole("DOADOR");
		    doador.setRoles(new HashSet<>(Arrays.asList(userRole)));
		    doador.getRoles().add(doadorRole);
			usuarioDAO.save(doador);
		} catch (ConstraintViolationException e) {
		    //DataIsNotValidException is our custom exception
		    throw new IllegalArgumentException("Data is not valid" + e.getMessage());
		}
		
		return doador;

	}
	
	public Usuario adicionaReceptor(Usuario receptor) throws Exception {
		
		if(verificaSeJaExiste(receptor.getId()))
			throw new Exception("Usuario ja existente: " + receptor.getId());
		
		//ClasseUsuario classeUser = ClasseUsuario.valueOf(classe);
		//Usuario doador = new Doador(id, nome, email, celular, classeUser);
		try {
			receptor.setPassword(bCryptPasswordEncoder.encode(receptor.getPassword()));
		    receptor.setEnabled(true);
		    Role userRole = roleRepository.findByRole("ADMIN");
		    Role receptorRole = roleRepository.findByRole("RECEPTOR");
		    receptor.setRoles(new HashSet<>(Arrays.asList(userRole)));
		    receptor.getRoles().add(receptorRole);
			usuarioDAO.save(receptor);
		} catch (ConstraintViolationException e) {
		    //DataIsNotValidException is our custom exception
		    throw new IllegalArgumentException("Data is not valid" + e.getMessage());
		}
		
		return receptor;

	}
	
	
	public Usuario findUserByEmail(String email) {
	    return usuarioDAO.findUsuarioByEmail(email);
	}
	private boolean verificaSeJaExiste(String id) {
		return usuarioDAO.existsById(id);
	}

	public Usuario atualizaUsuario(String id, Usuario usuario) throws Exception {
		if (id == null || id.equals(""))
			throw new Exception("Entrada invalida: id do usuario nao pode ser vazio ou nulo.");
		
		Usuario usuarioToUpdate = usuarioDAO.findUsuarioById(id);

		usuarioToUpdate = usuario;
		usuarioDAO.save(usuarioToUpdate);
		return usuarioToUpdate;
	}
	
	//OK
	@Cacheable("usuarios")
	public List<Usuario> pesquisaTodosUsuarios() throws InterruptedException {
		Thread.sleep(5000);
		return usuarioDAO.findAll();
	}

	// OK
	public void deletarTodosUsuarios() {
		usuarioDAO.deleteAll();
	}

	// OK
	public Usuario pesquisaUsuarioId(String id) {
		return usuarioDAO.findUsuarioById(id);
	}

	// OK
	public String pesquisaUsuarioNome(String nome) {
		List<Usuario> usuarios = this.usuarioDAO.findAll();
		String retorno = "";
		for (Usuario usuario : usuarios) {
			if (usuario.getNome().equals(nome)) {
				retorno += usuario.toString() + " | ";
			}
		}
		return retorno;
	}

	// OK
	public Usuario removeUsuario(String id) throws Exception {
		if (id == null || id.equals(""))
			throw new Exception("Entrada invalida: id do usuario nao pode ser vazio ou nulo.");
		
		Usuario usuario = this.usuarioDAO.findUsuarioById(id);
		
		if (usuario == null)
			throw new Exception("Usuario nao encontrado: " + id);
		
		usuarioDAO.delete(usuario);
		return usuario;
	}

	public List<Item> pesquisaitensDoacao(String idUsuario) {
		return itemDAO.findItensByIdDoador(idUsuario);
		
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		 Usuario user = usuarioDAO.findUsuarioByEmail(email);
		    if(user != null) {
		        List<GrantedAuthority> authorities = getUserAuthority(user.getRoles());
		        return buildUserForAuthentication(user, authorities);
		    } else {
		        throw new UsernameNotFoundException("username not found");
		    }
	}
	
	private List<GrantedAuthority> getUserAuthority(Set<Role> userRoles) {
	    Set<GrantedAuthority> roles = new HashSet<>();
	    userRoles.forEach((role) -> {
	        roles.add(new SimpleGrantedAuthority(role.getRole()));
	    });

	    List<GrantedAuthority> grantedAuthorities = new ArrayList<>(roles);
	    return grantedAuthorities;
	}
	
	private UserDetails buildUserForAuthentication(Usuario user, List<GrantedAuthority> authorities) {
	    return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
	}

}
