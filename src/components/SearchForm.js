import React, { useState } from "react";
import { Form, Field } from "formik";


export default function SearchForm() {

  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      if (props.status) {
        setUsers([...users, props.status]);
      }
    }, [props.status]);
 
  return (
    <section className="search-form">
     <Form>
          <Field type="text" name="search" placeholder="Search" />
          {props.touched.name && props.errors.name && (
            <p className="error">{props.errors.name}</p>
          )}
          </Form>
    </section>
  );
}
