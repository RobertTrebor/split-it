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
create table if not exists department (
    id integer primary key,
    transaction_id integer NOT NULL,
    dept_name varchar(50) NOT NULL
);

create table if not exists employee (
    id integer primary key,
    transaction_id integer NOT NULL,
    firstname varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
    dept_id integer NOT NULL
);


create table if not exists employee_detail (
    employee_id integer primary key,
    street varchar(50) NOT NULL ,
    city varchar(50) NOT NULL ,
    state varchar(50) NOT NULL ,
    country varchar(50) NOT NULL
);


create table if not exists meeting (
    meeting_id integer primary key,
    subject VARCHAR(50) NOT NULL
);


create table if not exists employee_meeting (
    employee_id integer not null,
    meeting_id integer not null
);

create sequence if not exists seq_meet start with 100 increment by 1;
create sequence if not exists seq_dept start with 100 increment by 1;
create sequence if not exists seq_empl start with 100 increment by 1;


/*
{:name :drop-ddl
 :doc " drop database schema  "
 }*/
drop table department;
drop table employee;
drop sequence seq_empl;
drop sequence seq_dept;
drop sequence seq_meet;


/*
{:name :init-data
 :doc " add data, need to testing   "
 }*/
insert into department (id, transaction_id, dept_name) values (1, 0, 'Business' );
insert into department (id, transaction_id, dept_name) values (2, 0, 'Marketing' );
insert into department (id, transaction_id, dept_name) values (3, 0, 'HR' );
insert into employee   (id, transaction_id, firstname, lastname, dept_id) values (1, 0, 'Abba', 'Zoma', 1 );
insert into employee   (id, transaction_id, firstname, lastname, dept_id) values (2, 0, 'Bala', 'Zen', 2 );
insert into employee   (id, transaction_id, firstname, lastname, dept_id) values (3, 0, 'Jamal', 'Kundu', 3 );



/*
{:name [:gen-dept :gen-empl :gen-meet]
 :result #{:single}
 }*/
call next value for seq_dept;
call next value for seq_empl;
call next value for seq_meet;


/*
{:doc "query department  "
 :name [:get-dept-list :get-dept-by-ids :get-employee-list :get-meeting-list :get-employee-meeting-list]
 :model [:department :department :employee :meeting :employee-meeting]
 :name-meta {:get-dept-by-ids {:validation [[:id  :type [] "Id will be sequence"]
                                            [:id :contain Long "Id contain will be Long "]]}}
 :timeout 5000
 :result #{:array}
 :skip #{:join}
 }*/
select * from department;
select * from department where id in (:id);
select * from employee;
select * from meeting;
select * from employee_meeting;


/*
{:doc "query department  "
 :name  [:get-dept-by-id :get-dept-employee]
 :model [:department :employee]
 :group :load-dept
 :name-meta {:department {:timeout 2000
                              :params [[:id :ref-gen :gen-dept]]
                              :validation [[ :id :type Long "Id will be Long 2"]]
                              :result #{:single}}
             :get-dept-by-id {:timeout 3000}}
 :timeout 5000
 :validation [[:id :type Long "Id will be Long"]]
 }*/
select * from department where id = :id ;
select * from employee where dept_id = :id;



/*
{:doc "Modify department"
 :name [:insert-dept :update-dept :delete-dept]
 :model :department
 :group :modify-dept
 :name-meta {:insert-dept {:params [[:id :ref-gen :gen-dept]
                                    [:transaction_id :ref-con 0]]}
             :update-dept {:params [[:next_transaction_id :ref-fn-key inc :transaction_id]]}
             :delete-dept {:validation [[:id :type [] "Id will be sequence"]
                                        [:id :contain Long "Id contain will be Long "]]}}
 :validation [[:id :type Long "Id will be Long"]]
 :commit :all
 }*/
insert into department (id, transaction_id, dept_name) values (:id, :transaction_id, :dept_name);
update department set dept_name=:dept_name, transaction_id=:next_transaction_id  where transaction_id=:transaction_id and id=:id;
delete from department where id in (:id);




/*
{:doc "Load employee with dept, details and meeting  "
 :name [:get-employee-by-id :get-employee-dept :get-employee-detail :get-employee-meeting]
 :model [:employee :department :employee-detail :employee-meeting]
 :group :load-employee
 :name-meta {:get-employee-by-id  {:result #{:single}}
             :get-employee-dept   {:result #{:single}}
             :get-employee-detail {:result #{:single}}
             :get-employee-meeting {:result #{:array}}}
 :validation [[:id :type Long "Id will be Long" ]]
 }*/
select * from employee where id = :id;
select d.* from department d, employee e where e.id=:id and d.id = e.dept_id;
select ed.* from employee_detail ed where ed.employee_id=:id;
select m.*, em.* from meeting m, employee_meeting em where em.employee_id=:id and em.meeting_id = m.meeting_id;


/*
{:doc "Modify employee with dept, details and meeting  "
 :name [:insert-employee :insert-employee-detail :update-employee-dept]
 :group :modify-employee
 :name-meta {:insert-employee {:model :employee
                               :params [[:transaction_id :ref-con 0]
                                        [:id :ref-gen :gen-dept ]]}
           :insert-employee-detail {:model :employee-detail}
           :update-employee-dept   {:model :employee
                                    :params [[:next_transaction_id :ref-fn-key inc :transaction_id]]}}
 :validation [[:id :type Long "Id will be Long"]]
 :commit :all
 }*/
insert into employee (id,  transaction_id,  firstname,  lastname,  dept_id)
             values (:id, :transaction_id, :firstname, :lastname, :dept_id);
insert into employee_detail (employee_id, street,   city,  state,  country )
                    values (:employee_id, :street, :city, :state, :country);
update employee set dept_id=:dept_id, transaction_id=:next_transaction_id where transaction_id=:transaction_id and id=:id;


/*
{:doc "Get all meeting"
 :name [:get-meeting-by-id :get-employee-for-meeting ]
 :group :load-meeting
 :name-meta {:get-meeting-by-id {:model :meeting
                                 :result #{:single}
                                 :validation [[:id :type Long "Id will be sequence"]
                                              [:id :range 10 11 "Id range will be between 10 and 11"]]}
            :get-employee-for-meeting {:model :employee-meeting}}
 }*/
select * from meeting where  meeting_id = :id;
select e.*, em.employee_id from employee e, employee_meeting em where em.meeting_id = :id and em.employee_id = e.id;


/*
{:doc "Add new meeting"
 :name [:insert-meeting :insert-employee-meeting]
 :group :modify-meeting
 :name-meta {:insert-meeting {:model :meeting
                              :params [[:meeting_id :ref-gen :gen-meet]]}
             :insert-employee-meeting {:model :employee-meeting}}
 :commit :all
 }*/
insert into meeting (meeting_id, subject) values (:meeting_id, :subject);
insert into employee_meeting (employee_id, meeting_id) values (:employee_id, :meeting_id);



