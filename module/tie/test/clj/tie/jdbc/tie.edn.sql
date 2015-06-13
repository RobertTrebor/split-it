/*
{:name :config
 :doc "About meta data"
 :file-reload true
 :default-timeout 1000
 :reserve-name #{:create-ddl :drop-ddl :init-data}
 :datasource [{:driverClass "org.h2.Driver"
               :jdbcUrl "jdbc:h2:file:tie"
               :user "sa"
               :password ""
               :maxPoolSize 6
               :minPoolSize 1
               :initialPoolSize 1}]}
*/


/*
{:name :create-ddl
 :doc " create table, need to testing  "
 :sql "
*/

CREATE TABLE lang (
     id    integer PRIMARY KEY,
     name  varchar(40) NOT NULL
);

CREATE TABLE lang_designer (
     id   integer PRIMARY KEY,
     name varchar (40)
);

-- "}


/*
{:name :drop-ddl
 :doc " drop table example, need fo testing  "
 :sql "
*/
drop table lang;
drop table lang_designer;
-- "}


/*
{:name :init-data
 :doc " add data, need to testing   "
 :sql "
*/
insert into lang values (1, 'C');
insert into lang values (2, 'Ptthon');
insert into lang values (3, 'Clojure');
insert into lang_designer values (1, 'Dennis Ritchie' );
insert into lang_designer values (2, 'Guido van Rossum' );
insert into lang_designer values (3, 'Rich Hickey' );
-- "}

/*
{:name :langs
 :entity [:lang ]
 :doc "Min Example "
 :validation {:lang {:id [sequential?]}}
 :sql "
*/
SELECT * FROM lang where id in (:id);

-- "}

/*
{:name :lang_designer
 :entity [:lang :designer]
 :validation {:lang {:id [number?]}
              :designer {:id [number?]}}
 :doc "Min Example "
 :sql "
*/
SELECT * FROM lang where id = :id;
SELECT * FROM lang_designer where id = :id;
-- "}


/*
{:name :designers
 :entity [:designer]
 :doc "Full example with validation "
 :validation {:designer {:id [sequential?]}}
 :col-map {:designer {:id :LangId}}
 :timeout 1000
 :sql "
*/
SELECT * FROM lang_designer where id in (:id);
-- "}


/*
{:name :lang3
 :entity [:lang]
 :doc "Full example with validation "
 :params {:id 1}
 :validation {:lang {:id [number? "3"]}}
 :col-map {:lang {:id :LangId}}
 :timeout 1000
 :sql "
*/
SELECT * FROM lang where id=:id;
-- "}



/*
{:name :save-lang!
 :entity [:lang :designer :lang2]
 :validation {:lang {:id [number?]}}
 :transaction :multi
 :sql "
*/
insert into lang values (:id, :name );
insert into lang_designer values (:id, :name);
select * from lang where id=:id;
-- "}


/*
{:name :save-lang-atom
 :entity [:lang :designer]
 :sql "
*/
insert into lang values (:id, :name );
insert into lang_designer values (:id, :name);

-- "}
