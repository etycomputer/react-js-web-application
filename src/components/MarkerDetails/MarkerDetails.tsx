import {
  PencilIcon,
  StopIcon,
  TrashIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import { Button, Title } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";

import DetailsList from "./DetailsList";

interface PropsType {
  marker?: Marker;
}

function MarkerDetails({ marker }: PropsType) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="h-[40vh] overflow-y-scroll pr-1">
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
                disabled={!marker}
              >
                Edit
              </Button>
              <Button
                className="ml-4"
                size="xs"
                variant="light"
                icon={TrashIcon}
                color="rose"
                disabled={!marker}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
      {marker ? <DetailsList isEditing={isEditing} marker={marker} /> : null}
    </div>
  );
}

export default MarkerDetails;

