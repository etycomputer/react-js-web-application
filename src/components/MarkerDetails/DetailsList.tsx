import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Badge, List, ListItem } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";

import classNames from "classnames";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";

interface PropsType {
  marker: Marker;
  isEditing: boolean;
}

function DetailsList({ isEditing, marker: originalMarker }: PropsType) {
  const [markerToEdit, setMarkerToEdit] = React.useState<Marker>(
    structuredClone(originalMarker)
  );

  React.useEffect(() => {
    if (!isEditing) {
      setMarkerToEdit(structuredClone(originalMarker));
    }
  }, [isEditing, originalMarker]);

  return (
    <List>
      <ListItem>
        <span>Subnet</span>
        <InputNumber
          inputClassName={classNames("text-right w-1/2", {
            "border-transparent": !isEditing,
          })}
          className="p-inputtext-sm w-1/2"
          disabled={!isEditing}
          value={markerToEdit.subnet}
          onValueChange={({ value }) =>
            setMarkerToEdit((prev) => ({ ...prev, subnet: value ?? 0 }))
          }
        />
      </ListItem>
      <ListItem>
        <span>Node</span>
        <InputNumber
          inputClassName={classNames("text-right w-1/2", {
            "border-transparent": !isEditing,
          })}
          className="p-inputtext-sm w-1/2"
          disabled={!isEditing}
          value={markerToEdit.node}
          onValueChange={({ value }) =>
            setMarkerToEdit((prev) => ({ ...prev, node: value ?? 0 }))
          }
        />
      </ListItem>
      <ListItem>
        <span>X</span>
        <InputNumber
          inputClassName={classNames("text-right w-1/2", {
            "border-transparent": !isEditing,
          })}
          className="p-inputtext-sm w-1/2"
          disabled={!isEditing}
          value={markerToEdit.installPosition.x}
          onValueChange={({ value }) =>
            setMarkerToEdit((prev) => ({
              ...prev,
              installPosition: { ...prev.installPosition, x: value ?? 0 },
            }))
          }
        />
      </ListItem>
      <ListItem>
        <span>Y</span>
        <InputNumber
          inputClassName={classNames("text-right w-1/2", {
            "border-transparent": !isEditing,
          })}
          className="p-inputtext-sm w-1/2"
          disabled={!isEditing}
          value={markerToEdit.installPosition.y}
          onValueChange={({ value }) =>
            setMarkerToEdit((prev) => ({
              ...prev,
              installPosition: { ...prev.installPosition, y: value ?? 0 },
            }))
          }
        />
      </ListItem>
      <ListItem>
        <span>Z</span>
        <InputNumber
          inputClassName={classNames("text-right w-1/2", {
            "border-transparent": !isEditing,
          })}
          className="p-inputtext-sm w-1/2"
          disabled={!isEditing}
          value={markerToEdit.installPosition.z}
          onValueChange={({ value }) =>
            setMarkerToEdit((prev) => ({
              ...prev,
              installPosition: { ...prev.installPosition, z: value ?? 0 },
            }))
          }
        />
      </ListItem>
      <ListItem>
        <span>Activated</span>
        {isEditing ? (
          <InputSwitch
            checked={markerToEdit.activated ?? false}
            onChange={({ value }) =>
              setMarkerToEdit((prev) => ({
                ...prev,
                activated: value ?? false,
              }))
            }
          />
        ) : (
          <Badge
            color={markerToEdit.activated ? "emerald" : "pink"}
            icon={AcademicCapIcon}
          >
            {markerToEdit.activated ? "Activated" : "Disabled"}
          </Badge>
        )}
      </ListItem>
      <ListItem>
        <span>Activation Time</span>
        <span>{markerToEdit.activationTime?.toLocaleString() || "-"}</span>
      </ListItem>
    </List>
  );
}

export default DetailsList;

