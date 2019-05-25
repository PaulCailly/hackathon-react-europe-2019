import React, { useState, useEffect } from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Formik } from "formik";

import { NumericTextBox, Input } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

import Card from "./Card";
import { API, graphqlOperation } from "aws-amplify";

import {
  createOffer as CreateOffer,
  deleteOffer as DeleteOffer
} from "./../../src/graphql/mutations";
import { listOffers } from "./../../src/graphql/queries";

import "./admin.css";

const Admin = () => {
  const [selected, setSelected] = useState(0);

  const handleSelect = ({ selected }) => {
    setSelected(selected);
  };

  const handleCardChange = formValues => {
    console.log(formValues);
    setCard(formValues);
  };
  async function createOffer(offer) {
    try {
      await API.graphql(graphqlOperation(CreateOffer, { input: offer.values }));
      setStatus("Offer created!");
      console.log("item created!");
    } catch (err) {
      console.log("error creating...", err);
    }
  }

  async function deleteOffer(offer) {
    try {
      await API.graphql(
        graphqlOperation(DeleteOffer, { input: { id: offer.id } })
      );
      getData();
      setStatus("Offer deleted!");
    } catch (err) {
      console.log("error deleting...", err);
    }
  }

  const [offers, updateOffers] = useState([]);

  useEffect(() => {
    getData();
  }, [selected]);

  async function getData() {
    try {
      const offerData = await API.graphql(graphqlOperation(listOffers));
      updateOffers(offerData.data.listOffers.items);
    } catch (err) {
      console.log("error fetching data..", err);
    }
  }

  return (
    <div className="formContainer">
      <TabStrip selected={selected} onSelect={handleSelect}>
        <TabStripTab title="Create">
          <div className="tab">
            <Formik
              initialValues={{
                img:
                  "./app/images/Gallery/Brazil-and-Argentina/Cristo-Redentor-(Christ-the-Redeemer)_Galabina-Yordanova_Attraction.JPG",
                name: "Your great offer",
                description: "Some description",
                price: 1000,
                featured: false,
                link: "/"
              }}
              onSubmit={(values, { setSubmitting }) => {
                createOffer({ values });
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <div className="formWrapper">
                  <form onSubmit={handleSubmit} className="form">
                    <div>
                      <p>Image path</p>
                      <Input
                        type="text"
                        name="img"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.img}
                      />
                    </div>

                    <div>
                      <p>Title</p>
                      <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>

                    <div>
                      <p>Description</p>
                      <Input
                        type="text"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                      />
                    </div>

                    <div>
                      <p>Price</p>
                      <NumericTextBox
                        type="text"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting}>
                      Submit
                    </Button>
                  </form>
                  <div className="cardWrapper">
                    <p>Preview</p>
                    <Card {...values} />
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </TabStripTab>
        <TabStripTab title="Manage">
          <div className="tab">
            <Grid style={{ height: "550px" }} data={offers}>
              <Column field="name" title="Name" />
              <Column field="description" title="Description" width="500px" />
              <Column field="price" title="Price" width="100px" />
              <Column field="featured" title="Featured" width="100px" />
              <Column
                field="Actions"
                title="Actions"
                width="100px"
                cell={props => (
                  <td>
                    <Button
                      onClick={() => {
                        deleteOffer(props.dataItem);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                )}
              />
            </Grid>
          </div>
        </TabStripTab>
      </TabStrip>
    </div>
  );
};
export default withAuthenticator(Admin, { includeGreetings: true });
