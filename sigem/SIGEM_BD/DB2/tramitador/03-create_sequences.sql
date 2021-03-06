-- Secuencias para las tablas internas
CREATE SEQUENCE spac_sq_id_anotaciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_avisos_electronicos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctaplicaciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctentidades AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctfases AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctfrmbusqueda AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctfrmbusqueda_org AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctfstr AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctos_firma AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctos_firma_cabecera AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctos_firma_detalle AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctos_firma_instance AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctpcdorg AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctreglas AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_cttpdoc AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_cttramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_cttrtd AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_docobj AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_dtdocumentos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_dtintervinientes AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_dttramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_entidadesresources AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_exp_relacionado AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_expedientes AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_registroses AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_fases AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_hitos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_infotramite AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_infosistema AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_p_plantillas AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pentidades AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_peventos AS INTEGER NO CACHE ORDER;
--CREATE SEQUENCE spac_sq_id_pfases AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pflujos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pfrmfases AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pfrmtramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pfstd AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pnodos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pplantillas AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pplazos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pprocedimientos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_procesos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ptramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pdeptramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_sincnodos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ssfunciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_sspermisos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_sssuperv AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_svars AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_tramitacion_agrupada AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_tramtcs_group_exps AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_tramites AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_vars AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_pctosfirma AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_calendarios AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_sssustitucion AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ssfechsustituciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_sssustitucionfecha AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctinformes AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctinformes_org AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ctjerarquias AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_id_ayudas AS INTEGER NO CACHE ORDER;

-- Secuencias para las tablas de validación
CREATE SEQUENCE spac_sq_spac_tbl_001 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_002 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_003 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_004 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_005 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_006 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_008 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_009 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_acts_funcs AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_efec_slnc AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_forma_inic AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_mats_comp AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_recursos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_sist_prod AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_sit_tlm AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_tiporeg AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_tipos_docs AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_vldtbl_tipos_tram AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE spac_sq_spac_tbl_007 AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE  spac_sq_vldtbl_tipo_notif AS INTEGER NO CACHE ORDER;
  
-- Secuencias para el publicador
CREATE SEQUENCE pub_sq_id_acciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE pub_sq_id_aplicaciones_hitos AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE pub_sq_id_condiciones AS INTEGER NO CACHE ORDER;
CREATE SEQUENCE pub_sq_id_reglas AS INTEGER NO CACHE ORDER;
