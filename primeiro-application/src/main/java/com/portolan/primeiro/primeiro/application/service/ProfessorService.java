package com.portolan.primeiro.primeiro.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import com.portolan.primeiro.primeiro.application.repository.ProfessorRepository;
import com.portolan.primeiro.primeiro.domain.model.Professor;


@Service
public class ProfessorService extends GumgaService<Professor, Long> {

	private final ProfessorRepository repository;

	@Autowired
	public ProfessorService(ProfessorRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
