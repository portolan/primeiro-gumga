package com.portolan.primeiro.primeiro.domain.model;
import io.gumga.domain.GumgaModel; //TODO RETIRAR OS IMPORTS DESNECESSÁRIOS
import io.gumga.domain.GumgaMultitenancy;
import java.io.Serializable;
import java.util.*;
import java.math.BigDecimal;
import javax.persistence.*;
import javax.validation.constraints.*;
import io.gumga.domain.domains.*;
import org.hibernate.annotations.Columns;
import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Indexed;
import org.hibernate.envers.Audited;
import com.fasterxml.jackson.annotation.JsonIgnore;

@GumgaMultitenancy
@SequenceGenerator(name = GumgaModel.SEQ_NAME, sequenceName = "SEQ_Turma")
@Audited
@Entity
@Table(name = "Turma")
public class Turma extends GumgaModel<Long> {

    @Version
    private Integer version;
    @Column(name = "codigo")
	private String codigo;
	@ManyToOne
	private Professor professor;

	public Turma() {
	}

	public String getCodigo() {
		return this.codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Professor getProfessor() {
		return this.professor;
	}
	public void setProfessor(Professor professor) {
		this.professor = professor;
	}
}