package com.edoe.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.edoe.Model.Item;
import com.edoe.Model.TipoUsuario;

@Repository
public interface ItemDAO extends MongoRepository<Item, String> {
	Item findItemById(String id);

	List<Item> findItensBytipoUsuario(TipoUsuario tipo);
	
	List<Item> findItensByIdDoador(String idDoador);
	
	List<Item> findItensByDescricao(String descricao);
}
