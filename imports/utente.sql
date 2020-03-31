--------------------------------------------------------
--  File created - terça-feira-março-31-2020   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table UTENTE
--------------------------------------------------------

  CREATE TABLE "LEI"."UTENTE" 
   (	"N_UTENTE" NUMBER(10,0), 
	"NOME" VARCHAR2(50 BYTE), 
	"SEXO" VARCHAR2(50 BYTE), 
	"DATA_NASCIMENTO" DATE
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "LEI_TABLES" ;
REM INSERTING into LEI.UTENTE
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index UTENTE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "LEI"."UTENTE_PK" ON "LEI"."UTENTE" ("N_UTENTE") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "LEI_TABLES" ;
--------------------------------------------------------
--  Constraints for Table UTENTE
--------------------------------------------------------

  ALTER TABLE "LEI"."UTENTE" MODIFY ("N_UTENTE" NOT NULL ENABLE);
  ALTER TABLE "LEI"."UTENTE" MODIFY ("NOME" NOT NULL ENABLE);
  ALTER TABLE "LEI"."UTENTE" ADD CONSTRAINT "UTENTE_PK" PRIMARY KEY ("N_UTENTE")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "LEI_TABLES"  ENABLE;
