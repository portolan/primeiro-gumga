package com.portolan.primeiro.primeiro.application.repository;

import io.gumga.domain.repository.GumgaCrudRepository;
import com.portolan.primeiro.primeiro.domain.model.Professor;

public interface ProfessorRepository extends GumgaCrudRepository<Professor, Long> {
}