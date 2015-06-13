/*
{:name :_config_
 :doc "About meta data"
 :file-reload true
 :timeout 1000
 :reserve-name #{:create-ddl :drop-ddl :init-data}
 :tx-prop [:isolation :serializable :read-only? false]
 :join [[:department :id :1-n :employee :dept_id]
        [:employee :id :1-1 :employee-detail :employee_id]
        [:employee :id :n-n :meeting :meeting_id [:employee-meeting :employee_id :meeting_id]]]

 }*/


/*
{:name :create-ddl
 :doc " Create Database schema  "
 }*/

 create table if not exists transaction (
    id integer primary key,
    transaction_id integer NOT NULL,
    code varchar (50) ,
    amount integer
 );

 create table if not exists category (
  id integer primary key,
  description varchar (50)
 );


create table if not exists splitcatagory (
  id integer primary key,
  bank_transaction_id integer,
  category_id integer,
  amount integer
);




create sequence if not exists seq_trans start with 100 increment by 1;
create sequence if not exists seq_cate start with 100 increment by 1;
create sequence if not exists seq_split start with 100 increment by 1;


/*
{:name :drop-ddl
 :doc " drop database schema  "
 }*/
drop table transaction;
drop table category;
drop table splitcatagory;
drop sequence seq_trans;
drop sequence seq_cate;
drop sequence seq_split;


/*
{:name :init-data
 :doc " add data, need to testing   "
 }*/
insert into transaction (id, transaction_id, code, amount) values (1, 100010, '1010101010', 300 );
insert into transaction (id, transaction_id, code, amount) values (2, 100010, '1010101010', 400 );
insert into transaction (id, transaction_id, code, amount) values (3, 100010, '1010101010', 400 );


insert into category (id, description) values (1,  'Food' );
insert into category (id, description) values (2,  'Cloth' );
insert into category (id, description) values (3,  'House' );
insert into category (id, description) values (4,  'others' );
insert into category (id, description) values (5,  'rest' );

insert into splitcatagory (id, bank_transaction_id, category_id, amount) values (1, 100010, 2, 30  );
insert into splitcatagory (id, bank_transaction_id, category_id, amount) values (2, 100010, 2, 30  );
insert into splitcatagory (id, bank_transaction_id, category_id, amount) values (3, 100010, 3, 30  );



/*
{:name [:gen-trans :gen-cate :gen-split]
 :result #{:single}
 }*/
call next value for seq_trans;
call next value for seq_cate;
call next value for seq_split;


/*
{:doc "query department  "
 :name [:get-splitcatagory-list :get-splitcatagory-by-id :get-category-list]
 :model [:splitcatagory :splitcatagory :category]
  :timeout 5000
 :result #{:array}
 :skip #{:join}
 }*/
select * from splitcatagory;
select * from splitcatagory where bank_transaction_id in (:id);
select * from category;


