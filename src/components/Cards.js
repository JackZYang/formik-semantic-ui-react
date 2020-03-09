import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./Cards.css";

const MemberCards = ({ formData }) => {
  return (
    <Grid>
      {formData.map(tableData => (
        <Grid.Column width={3}>
          <Card>
            <Card.Content>
              <Card.Header>{"Table " + tableData.table}</Card.Header>
              <Card.Description>
                {tableData.quantity + " x " + tableData.dish}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default MemberCards;