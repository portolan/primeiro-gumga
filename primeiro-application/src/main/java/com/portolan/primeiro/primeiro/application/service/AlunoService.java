package com.portolan.primeiro.primeiro.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import com.portolan.primeiro.primeiro.application.repository.AlunoRepository;
import com.portolan.primeiro.primeiro.domain.model.Aluno;


@Service
public class AlunoService extends GumgaService<Aluno, Long> {

	private final AlunoRepository repository;

	@Autowired
	public AlunoService(AlunoRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
