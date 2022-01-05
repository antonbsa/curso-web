import Client from "../core/Client";
import { iconEdit, iconTrash } from "./Icons";

interface TableProps {
  clientList: Client[];
  selectClient?: (client: Client) => void;
  deleteClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const { clientList, selectClient, deleteClient } = props;

  function renderActions(client) {
    return (
      <td className="flex justify-center">
        {selectClient && (
          <button onClick={() => selectClient?.(client)} className={`
          flex justify-center items-center
          text-green-600 rounded-full
          hover:bg-purple-50
          p-2 m-1
        `}>
            {iconEdit}
          </button>
        )}
        {deleteClient && (
          <button onClick={() => deleteClient?.(client)} className={`
          flex justify-center items-center
          text-red-500 rounded-full
          hover:bg-purple-50
          p-2 m-1
        `}>
            {iconTrash}
          </button>
        )}
      </td>
    )
  }

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        <th className="p-4">Actions</th>
      </tr>
    )
  }

  function renderData() {
    return clientList?.map((client, i) => {
      const { id, name, age } = client;
      return (
        <tr key={id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{id}</td>
          <td className="text-left p-4">{name}</td>
          <td className="text-left p-4">{age}</td>
          {renderActions(client)}
        </tr>
      )
    })
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        {renderHeader()}
      </thead>
      <tbody>
        {renderData()}
      </tbody>
    </table>
  )
}