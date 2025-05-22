import { ArrowUpDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                checked={table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
            />
        ),
        cell: ({ row }) => <Checkbox
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            checked={row.getIsSelected()} />
    },
    {
        accessorKey: "title",
        header: "Status",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "keyword",
        header: "Keyword[Traffic]",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "words",
        header: "Words",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "createdOn",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: info => info.getValue(),
    },
    {
        accessorKey: "publish",
        header: "Publish",
        cell: info => info.getValue() ? "Yes" : "No",
    },
]