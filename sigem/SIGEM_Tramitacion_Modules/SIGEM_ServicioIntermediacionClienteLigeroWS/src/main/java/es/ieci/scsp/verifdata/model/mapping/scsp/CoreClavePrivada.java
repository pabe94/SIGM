package es.ieci.scsp.verifdata.model.mapping.scsp;

// Generated 06-mar-2012 7:54:31 by Hibernate Tools 3.3.0.GA

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * CoreClavePrivada generated by hbm2java
 */
@Entity
@Table(name = "core_clave_privada")
public class CoreClavePrivada implements java.io.Serializable {

	private String alias;
	private String nombre;
	private String password;
	private String numeroserie;
	private Set<CoreServicio> coreServicios = new HashSet<CoreServicio>(0);

	public CoreClavePrivada() {
	}

	public CoreClavePrivada(String alias, String nombre, String password,
			String numeroserie) {
		this.alias = alias;
		this.nombre = nombre;
		this.password = password;
		this.numeroserie = numeroserie;
	}

	public CoreClavePrivada(String alias, String nombre, String password,
			String numeroserie, Set<CoreServicio> coreServicios) {
		this.alias = alias;
		this.nombre = nombre;
		this.password = password;
		this.numeroserie = numeroserie;
		this.coreServicios = coreServicios;
	}

	@Id
	@Column(name = "alias", unique = true, nullable = false, length = 256)
	public String getAlias() {
		return this.alias;
	}

	public void setAlias(String alias) {
		this.alias = alias;
	}

	@Column(name = "nombre", nullable = false, length = 256)
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	@Column(name = "password", nullable = false, length = 256)
	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Column(name = "numeroserie", nullable = false, length = 256)
	public String getNumeroserie() {
		return this.numeroserie;
	}

	public void setNumeroserie(String numeroserie) {
		this.numeroserie = numeroserie;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "coreClavePrivada")
	public Set<CoreServicio> getCoreServicios() {
		return this.coreServicios;
	}

	public void setCoreServicios(Set<CoreServicio> coreServicios) {
		this.coreServicios = coreServicios;
	}

}
