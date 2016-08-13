create table if not exists contacts (
	id serial primary key,
	email text not null unique,
	firstname text not null,
	lastname text,
	occupation text
);