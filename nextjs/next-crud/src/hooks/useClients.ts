import { useEffect, useState } from "react";
import ClientCollection from "../backend/db/ClientCollection";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";
import useVisibleLayout from "./useVisibleLayout";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const {
    formVisible,
    tableVisible,
    displayForm,
    displayTable,
  } = useVisibleLayout();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clientList, setClientList] = useState<Client[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clientList) => {
      setClientList(clientList);
      displayTable();
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    displayForm();
  }

  function newClient() {
    setClient(Client.empty());
    displayForm();
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return {
    client,
    clientList,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    tableVisible,
    formVisible,
    displayTable,
  }
}