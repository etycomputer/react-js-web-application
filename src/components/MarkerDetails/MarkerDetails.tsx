import { Title, List, ListItem, Badge, Button } from "@tremor/react";
import { Marker } from "../../generatedApis";
import {
  AcademicCapIcon,
  PencilIcon,
  StopIcon,
  TrashIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import React from "react";

interface PropsType {
  marker: Marker;
}

function MarkerDetails({ marker }: PropsType) {
  const [isEditing, setIsEditing] = React.useState(false);
  // const [markerToEdit, setMarkerToEdit] = React.useState(
  //   structuredClone(marker)
  // );

  return (
    <div className="max-h-[40vh] overflow-auto">
      <div className="flex justify-between">
        <Title>Marker Details</Title>
        <div className="flex">
          {isEditing ? (
            <>
              <Button
                size="xs"
                variant="light"
                icon={WrenchIcon}
                color="emerald"
                onClick={() => setIsEditing(false)}
              >
                Apply
              </Button>
              <Button
                className="ml-4"
                size="xs"
                variant="light"
                icon={StopIcon}
                color="pink"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button
                size="xs"
                variant="light"
                icon={PencilIcon}
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
              <Button
                className="ml-4"
                size="xs"
                variant="light"
                icon={TrashIcon}
                color="rose"
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
      <List>
        <ListItem>
          <span>Node</span>
          <span>{marker.node}</span>
        </ListItem>
        <ListItem>
          <span>Subnet</span>
          <span>{marker.subnet}</span>
        </ListItem>
        <ListItem>
          <span>Install Position</span>
          <pre>{JSON.stringify(marker.installPosition, null, "\t")}</pre>
        </ListItem>
        <ListItem>
          <span>Activated</span>
          <Badge
            color={marker.activated ? "emerald" : "pink"}
            icon={AcademicCapIcon}
          >
            {marker.activated ? "Activated" : "Disabled"}
          </Badge>
        </ListItem>
        <ListItem>
          <span>Activation Time</span>
          <span>{marker.activationTime?.toLocaleString() || "-"}</span>
        </ListItem>
      </List>
    </div>
  );
}

export default MarkerDetails;

