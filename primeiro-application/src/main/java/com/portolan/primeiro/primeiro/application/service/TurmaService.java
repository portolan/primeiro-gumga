package com.portolan.primeiro.primeiro.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import org.hibernate.Hibernate;

import com.portolan.primeiro.primeiro.application.repository.TurmaRepository;
import com.portolan.primeiro.primeiro.domain.model.Turma;


@Service
public class TurmaService extends GumgaService<Turma, Long> {

	private final TurmaRepository repository;

	@Autowired
	public TurmaService(TurmaRepository repository) {
		super(repository);
		this.repository = repository;
	}
	
}
