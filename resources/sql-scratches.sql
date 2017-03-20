
insert into amb_user (id, created_at, first_name, last_name, gender, email) values(2,now(),'Jerome','Tavé', 'male', 'jerometave@gmail.com');

-- dump just one table!!!

pg_dump -t '"user_photo"' amb > user_photo.sql


select u.*, user_photo.web_url as picture, bike.id as bike_id from amb_user u left join bike on bike.user_id = u.id left join user_photo on user_photo.user_id = u.id where u.id = 2 limit 1;


select  b.*, manufacturer.name as manufacturer_name, model.name as model_name from bike b left join bike_info on b.id = bike_info.bike_id left join manufacturer on b.manufacturer_id=manufacturer.id left join model on b.model_id=model.id where b.id = 64;

select  b.*,
        type.label as type,
        manufacturer.name as manufacturer_name, 
        model.name as model_name from bike b
  left join bike_info on b.id = bike_info.bike_id
  left join manufacturer on b.manufacturer_id=manufacturer.id
  left join model on b.model_id=model.id
  left join type on b.type_ids[1]=type.id
  where b.id = 64;



select  b.id, b.brand_unlinked, b.model_unlinked, b.manufacturer_id, b.model_id,
        type.label as type,
        manufacturer.name as manufacturer_name, 
        model.name as model_name from bike b
  left join bike_info on b.id = bike_info.bike_id
  left join manufacturer on b.manufacturer_id=manufacturer.id
  left join model on b.model_id=model.id
  left join type on b.type_ids[1]=type.id;


select  b.id, b.brand_unlinked, b.model_unlinked, b.manufacturer_id, b.model_id,
        type.label as type,
        manufacturer.name as manufacturer_name, 
        model.name as model_name from bike b
  left join bike_info on b.id = bike_info.bike_id
  left join manufacturer on b.manufacturer_id=manufacturer.id
  left join model on b.model_id=model.id
  left join type on b.type_ids[1]=type.id
  where id = 61;


SELECT *
    FROM bike INNER JOIN manufacturer ON (bike.manufacturer_id = manufacturer.id) where id = 60;

select * from manufacturer where name ilike 'van%' or name ilike '%Unknown Brand%' limit 1;

CREATE TYPE market_size_type AS ENUM ('A','B', 'C');

-- \COPY country FROM countries.csv DELIMITER ',' CSV;


\COPY country FROM '/Users/arobson/Sites/aboutmybike/db/countries.csv' DELIMITER ',' CSV;

SELECT array_to_json(array_agg(t)) FROM t


COPY FROM SELECT row_to_json(r) FROM (select name from manufacturer) r;


-- from postgres command line:

-- getting brand names as simple array

-- doesn't work:
COPY (SELECT array(select brand from bike)) TO '/Users/arobson/Sites/aboutmybike/test-scripts/brand-names.js';

-- but that doesn't quote the strings!!! WTF????

-- doesn't work:
COPY (SELECT array(select concat('"', name, '"') from manufacturer)) TO '/Users/arobson/Sites/aboutmybike/test-scripts/brand-names.js';

-- doesn't work:
COPY (SELECT array(SELECT row_to_json(r) FROM (select name from manufacturer) r )) TO '/Users/arobson/Sites/aboutmybike/test-scripts/brand-names.js';


-- best so far. 
COPY (SELECT row_to_json(r) FROM (select name from manufacturer) r ) TO '/Users/arobson/Sites/aboutmybike/test-scripts/brand-names.js';

-- shit
COPY (select name from manufacturer) DELIMITER ',' CSV;
--shit
\copy (select name from manufacturer limit 10) TO '/Users/arobson/Sites/aboutmybike/test-scripts/brand-names.js' CSV

-- new path:
COPY (SELECT row_to_json(r) FROM (select name from manufacturer) r ) TO '/Users/arobson/Sites/aboutmybike/test-scripts/manufacturers/brand-names.js';

comment on table bike is 'All is intuitive except style_override. this allows the user to override the style their bike might inherit from brand+model -- that is, they may have customized it.'


insert into bike(user_id, main_photo_path) values(1, '/dev/new_folder/2017-001aboutmybike-1486587282141.jpg')


insert into bike(user_id, main_photo_path, description, nickname, manufacturer_id, model_id, brand_unlinked, model_unlinked) values(1, '/path/to/photo.jpg', null, null, null, null, null, null) returning id;