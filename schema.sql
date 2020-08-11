CREATE database budgetVotes;

create table taxBrackets ( 
	totalVotes Int auto_increment not null, 
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalVotes)
    );
create table agriculture(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table commerce(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table defense(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table energy(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table education(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table health_human_services(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table homeland_security(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table interior(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table labor(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table state(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table transportation(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table treasury(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table environmental_protection(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table communication(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table election(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table trade(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table housing_urban_development(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table social(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table justice(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table NASA(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table veterans_affairs(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );
create table equal_employment(
	totalPercent int,
    tax1 int,
    tax2 int, 
    tax3 int, 
    tax4 int, 
    tax5 int, 
    tax6 int, 
    tax7 int,
    primary key (totalPercent)
    );