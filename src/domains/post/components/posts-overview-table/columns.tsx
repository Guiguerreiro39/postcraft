"use client";

import type { Post } from "@/server/db/schema";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return (
        <div className="text-muted-foreground">
          {row.getValue("description")}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));

      return <div className="text-left">{date.toLocaleString()}</div>;
    },
  },
];
