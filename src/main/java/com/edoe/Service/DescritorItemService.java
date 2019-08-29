package com.edoe.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoe.Model.DescritorItem;
import com.edoe.Repository.DescritorItemDAO;

@Service
public class DescritorItemService {

	@Autowired
	private DescritorItemDAO descritorDao;
	
	
	public void insereDescritor(DescritorItem descritor) {
		descritorDao.save(descritor);
	}
	
	public boolean existeDescritor(String descricao) {
		return descritorDao.existsById(descricao);
	}
	public DescritorItem findById(String descricao) {
		return descritorDao.findById(descricao).get();
	}

	public List<DescritorItem> carregaDescritores() {
		return descritorDao.findAll();
	}
	
	public void deletaDecritores() {
		descritorDao.deleteAll();
	}
}
