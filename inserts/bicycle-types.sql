DROP TABLE type;
CREATE TABLE type (
    id integer NOT NULL,
    label text,
    notes text,
    related_type_ids integer[]
);
INSERT into type (id, label, related_type_ids) VALUES (1, 'Road', null);
INSERT into type (id, label, related_type_ids) VALUES (2, 'Mountain', null);
INSERT into type (id, label, related_type_ids) VALUES (3, 'Downhill', ARRAY[2]);
INSERT into type (id, label, related_type_ids) VALUES (4, 'Fat', ARRAY[2]);
INSERT into type (id, label, related_type_ids) VALUES (5, 'Suspension', ARRAY[2]);
INSERT into type (id, label, related_type_ids) VALUES (6, 'Hybrid', null);
INSERT into type (id, label, related_type_ids) VALUES (7, 'City', ARRAY[6]);
INSERT into type (id, label, related_type_ids) VALUES (8, 'Cyclo-cross', ARRAY[6]);
INSERT into type (id, label, related_type_ids) VALUES (9, 'Flat Bar Road', ARRAY[6]);
INSERT into type (id, label, related_type_ids) VALUES (10, 'Trekking', ARRAY[6]);
INSERT into type (id, label, related_type_ids) VALUES (11, 'Step-Through', null);
INSERT into type (id, label, related_type_ids) VALUES (12, 'Mixte', ARRAY[11]);
INSERT into type (id, label, related_type_ids) VALUES (13, 'Fixed Gear', null);
INSERT into type (id, label, related_type_ids) VALUES (14, 'BMX', ARRAY[13]);
INSERT into type (id, label, related_type_ids) VALUES (15, 'Track', ARRAY[13]);
INSERT into type (id, label, related_type_ids) VALUES (16, 'Cruiser', null);
INSERT into type (id, label, related_type_ids) VALUES (17, 'Folding', null);
INSERT into type (id, label, related_type_ids) VALUES (18, 'Recumbent', null);
INSERT into type (id, label, related_type_ids) VALUES (19, 'Tandem', null);
INSERT into type (id, label, related_type_ids) VALUES (20, 'Tricycle', null);
INSERT into type (id, label, related_type_ids) VALUES (21, 'Unicycle', null);
INSERT into type (id, label, related_type_ids) VALUES (22, 'Utility', null);
INSERT into type (id, label, related_type_ids) VALUES (23, 'Motorized', null);
INSERT into type (id, label, related_type_ids) VALUES (24, 'Electric', null);
