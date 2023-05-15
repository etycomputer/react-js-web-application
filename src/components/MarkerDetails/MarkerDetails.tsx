import {
  AcademicCapIcon,
  PencilIcon,
  StopIcon,
  TrashIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Badge, Button, List, ListItem, Title } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";

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
        <Title>Details</Title>
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
          <span>Subnet</span>
          <span>{marker.subnet}</span>
        </ListItem>
        <ListItem>
          <span>Node</span>
          <span>{marker.node}</span>
        </ListItem>
        <ListItem>
          <span>X</span>
          <span>{marker.installPosition.x}</span>
        </ListItem>
        <ListItem>
          <span>Y</span>
          <span>{marker.installPosition.y}</span>
        </ListItem>
        <ListItem>
          <span>Z</span>
          <span>{marker.installPosition.z}</span>
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

