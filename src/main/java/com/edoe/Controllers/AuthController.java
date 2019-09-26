package com.edoe.Controllers;

import static org.springframework.http.ResponseEntity.ok;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edoe.Model.AuthBody;
import com.edoe.Model.Doador;
import com.edoe.Model.Receptor;
import com.edoe.Model.Usuario;
import com.edoe.Repository.UsuarioDAO;
import com.edoe.Security.JwtTokenProvider;
import com.edoe.Service.UsuarioService;

@RestController
@RequestMapping("/edoe/auth")
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtTokenProvider jwtTokenProvider;

	@Autowired
	UsuarioDAO users;

	@Autowired
	private UsuarioService userService;

	@SuppressWarnings("rawtypes")
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody AuthBody data) {
		try {
			String username = data.getEmail();
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
			String token = jwtTokenProvider.createToken(username, this.users.findUsuarioByEmail(username).getRoles());
			Map<Object, Object> model = new HashMap<>();
			model.put("username", username);
			model.put("token", token);
			return ok(model);
		} catch (AuthenticationException e) {
			throw new BadCredentialsException("Invalid email/password supplied");
		}
	}

	@SuppressWarnings("rawtypes")
	@PostMapping("/register/doador")
	public ResponseEntity registerDoador(@RequestBody Doador user) throws Exception {
		Usuario userExists = userService.findUserByEmail(user.getEmail());
		if (userExists != null) {
			throw new BadCredentialsException("User with username: " + user.getEmail() + " already exists");
		}
		userService.adicionaDoador(user);
		Map<Object, Object> model = new HashMap<>();
		model.put("message", "User registered successfully");
		return ok(model);
	}
	
	@SuppressWarnings("rawtypes")
	@PostMapping("/register/receptor")
	public ResponseEntity registerReceptor(@RequestBody Receptor user) throws Exception {
		Usuario userExists = userService.findUserByEmail(user.getEmail());
		if (userExists != null) {
			throw new BadCredentialsException("User with username: " + user.getEmail() + " already exists");
		}
		userService.adicionaReceptor(user);
		Map<Object, Object> model = new HashMap<>();
		model.put("message", "User registered successfully");
		return ok(model);
	}
}
