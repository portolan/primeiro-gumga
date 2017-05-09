package com.portolan.primeiro.primeiro.application.service;

import io.gumga.application.GumgaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.portolan.primeiro.primeiro.domain.model.Pessoa;
import com.portolan.primeiro.primeiro.application.repository.PessoaRepository;

@Service
public class PessoaService extends GumgaService<Pessoa, Long> {
    
	private final PessoaRepository repository;

	@Autowired
	public PessoaService(PessoaRepository repository) {
		super(repository);
		this.repository = repository;
	}    
    
}
