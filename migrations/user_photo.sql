--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: user_photo; Type: TABLE; Schema: public; Owner: arobson
--

CREATE TABLE user_photo (
    id integer NOT NULL,
    user_id integer,
    web_url text NOT NULL,
    source text DEFAULT '''facebook'''::text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE user_photo OWNER TO arobson;

--
-- Name: user_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: arobson
--

CREATE SEQUENCE user_photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_photo_id_seq OWNER TO arobson;

--
-- Name: user_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arobson
--

ALTER SEQUENCE user_photo_id_seq OWNED BY user_photo.id;


--
-- Name: user_photo id; Type: DEFAULT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY user_photo ALTER COLUMN id SET DEFAULT nextval('user_photo_id_seq'::regclass);


--
-- Data for Name: user_photo; Type: TABLE DATA; Schema: public; Owner: arobson
--

COPY user_photo (id, user_id, web_url, source, created_at) FROM stdin;
1	3	https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12295504_10207924651948031_1540028450570342820_n.jpg?oh=141a54fe9311be8d1068fd3df0fa80ff&oe=596EE342	'facebook'	2017-03-01 16:09:16.846432-08
\.


--
-- Name: user_photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arobson
--

SELECT pg_catalog.setval('user_photo_id_seq', 1, true);


--
-- Name: user_photo user_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY user_photo
    ADD CONSTRAINT user_photo_pkey PRIMARY KEY (id);


--
-- Name: user_photo user_photo_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arobson
--

ALTER TABLE ONLY user_photo
    ADD CONSTRAINT user_photo_user_id_fkey FOREIGN KEY (user_id) REFERENCES amb_user(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

