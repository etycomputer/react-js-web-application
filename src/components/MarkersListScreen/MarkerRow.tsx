import {
  AcademicCapIcon,
  WrenchIcon,
  StopIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { TableRow, TableCell, Badge, Button } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";

interface PropsType {
  marker: Marker;
}

function MarkerRow({ marker }: PropsType) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [markerToEdit, setMarkerToEdit] = React.useState(
    structuredClone(marker)
  );

  return (
    <TableRow>
      <TableCell className="text-center">{marker.markerId}</TableCell>
      <TableCell className="text-center">
        <input
          type="number"
          value={markerToEdit.node}
          className="w-10 text-center ml-4"
          onChange={({ target: { valueAsNumber } }) =>
            isEditing
              ? setMarkerToEdit((prev) => ({
                  ...prev,
                  node: valueAsNumber,
                }))
              : undefined
          }
        />
      </TableCell>
      <TableCell className="text-center">
        <input
          type="number"
          value={markerToEdit.subnet}
          className="w-10 text-center ml-4"
          onChange={({ target: { valueAsNumber } }) =>
            isEditing
              ? setMarkerToEdit((prev) => ({
                  ...prev,
                  subnet: valueAsNumber,
                }))
              : undefined
          }
        />
      </TableCell>
      <TableCell className="text-center">
        <input
          type="number"
          value={markerToEdit.installPosition.x}
          className="w-10 text-center ml-4"
          onChange={({ target: { valueAsNumber } }) =>
            isEditing
              ? setMarkerToEdit((prev) => ({
                  ...prev,
                  installPosition: {
                    ...prev.installPosition,
                    x: valueAsNumber,
                  },
                }))
              : undefined
          }
        />
      </TableCell>
      <TableCell className="text-center">
        <input
          type="number"
          value={markerToEdit.installPosition.y}
          className="w-10 text-center ml-4"
          onChange={({ target: { valueAsNumber } }) =>
            isEditing
              ? setMarkerToEdit((prev) => ({
                  ...prev,
                  installPosition: {
                    ...prev.installPosition,
                    y: valueAsNumber,
                  },
                }))
              : undefined
          }
        />
      </TableCell>
      <TableCell className="text-center">
        <input
          type="number"
          value={markerToEdit.installPosition.z}
          className="w-10 text-center ml-4"
          onChange={({ target: { valueAsNumber } }) =>
            isEditing
              ? setMarkerToEdit((prev) => ({
                  ...prev,
                  installPosition: {
                    ...prev.installPosition,
                    z: valueAsNumber,
                  },
                }))
              : undefined
          }
        />
      </TableCell>
      <TableCell className="text-center">
        <Badge
          color={marker.activated ? "emerald" : "pink"}
          icon={AcademicCapIcon}
        >
          {marker.activated ? "Activated" : "Disabled"}
        </Badge>
      </TableCell>
      <TableCell className="text-center">
        {marker.activationTime?.toLocaleString() || "-"}
      </TableCell>
      <TableCell className="text-center">
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
      </TableCell>
    </TableRow>
  );
}

export default MarkerRow;

