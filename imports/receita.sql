--------------------------------------------------------
--  File created - terça-feira-março-31-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table RECEITA
--------------------------------------------------------

  CREATE TABLE "LEI"."RECEITA" 
   (	"N_UTENTE" NUMBER(10,0), 
	"MED" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "LEI_TABLES" ;
REM INSERTING into LEI.RECEITA
SET DEFINE OFF;
--------------------------------------------------------
--  Ref Constraints for Table RECEITA
--------------------------------------------------------

  ALTER TABLE "LEI"."RECEITA" ADD FOREIGN KEY ("N_UTENTE")
	  REFERENCES "LEI"."UTENTE" ("N_UTENTE") ENABLE;
  ALTER TABLE "LEI"."RECEITA" ADD FOREIGN KEY ("MED")
	  REFERENCES "LEI"."PRF_MEDICAMENTOS" ("CODIGO") ENABLE;
