import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  client: Client;
  clientChanged?: (client: Client) => void;
  canceled?: () => void;
}

export default function Form(props: FormProps) {
  const { client, canceled, clientChanged } = props;

  const id = client?.id;
  const [name, setName] = useState(client?.name ?? '');
  const [age, setAge] = useState(client?.age ?? 0);

  return (
    <div>
      {id && (
        <Input
          readOnly
          text="Code"
          value={id}
          className="mb-5"
        />
      )}
      <Input
        text="Name"
        value={name}
        valueChanged={setName}
        className="mb-5"
      />
      <Input
        text="Age"
        type="number"
        value={age}
        valueChanged={setAge}
      />
      <div className="mt-7 flex justify-end">
        <Button color="blue" className="mr-2"
          onClick={() => clientChanged?.(new Client(name, +age, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={canceled}>
          Cancelar
        </Button>
      </div>
    </div>
  )
}