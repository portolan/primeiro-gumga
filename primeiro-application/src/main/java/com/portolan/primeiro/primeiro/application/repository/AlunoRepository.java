package com.portolan.primeiro.primeiro.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import com.portolan.primeiro.primeiro.domain.model.Aluno;

public interface AlunoRepository extends GumgaCrudRepository<Aluno, Long> {
}