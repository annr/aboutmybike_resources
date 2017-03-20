
-- just in case any models are linked:
update bike set model_id = null;

delete from model;

ALTER SEQUENCE model_id_seq RESTART WITH 1;
