create table if not exists contacts (
	id serial primary key,
	email text not null unique,
	firstName text not null,
	lastName text,
	occupation text
);