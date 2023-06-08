"use client";

import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Tooltip, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'tickets', headerName: 'Tickets do cliente', flex: 2 },
  { field: 'Resp', headerName: 'Responsável', flex: 1 },
  { field: 'Number', headerName: 'Número', type: 'number', flex: 1 },
  { field: 'Status', headerName: 'Status', flex: 1 },
  { field: 'Subject', headerName: 'Assunto', flex: 2 },
  { field: 'email', headerName: 'Email', flex: 2 },
];

const rows = [
  { id: 1, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 35, Status: 'Urgente', Subject: 'Pedido #123456 - Status de entrega e previsão de chegada', email: 'jon@example.com' },
  { id: 2, Resp: 'Lucas', tickets: 'Ticket Atendimento - Suporte técnico', Number: 42, Status: 'Urgente', Subject: 'Problema com a impressora não reconhecida.', email: 'cersei@example.com' },
  { id: 3, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 45, Status: 'Urgente', Subject: 'Troca de tamanho de vestuário.', email: 'jaime@example.com' },
  { id: 4, Resp: 'Bruno', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 16, Status: 'Urgente', Subject: 'Endereço de entrega incorreto, favor retificar', email: 'arya@example.com' },
  { id: 5, Resp: 'Esther', tickets: 'Ticket Atendimento - Troca de produto', Number: 182, Status: 'Urgente', Subject: 'roduto danificado durante o transporte, necessito de substituição.', email: 'daenerys@example.com' },
  { id: 6, Resp: 'Bruno', tickets: 'Ticket Atendimento - Suporte técnico', Number: 150, Status: 'Urgente', Subject: 'Erro ao acessar o site', email: 'melisandre@example.com' },
  { id: 7, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 44, Status: 'Urgente', Subject: 'Pedido não recebido dentro do prazo estipulado', email: 'clifford@example.com' },
  { id: 8, Resp: 'Lucas', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 36, Status: 'Urgente', Subject: 'Informações sobre a transportadora responsável pela entrega.', email: 'frances@example.com' },
  { id: 9, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 65, Status: 'Urgente', Subject: 'Solicitação de troca do produto com defeito', email: 'roxie@example.com' },
  { id: 10, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 35, Status: 'Urgente', Subject: 'Pedido #123456 - Status de entrega e previsão de chegada', email: 'jon@example.com' },
  { id: 11, Resp: 'Lucas', tickets: 'Ticket Atendimento - Suporte técnico', Number: 42, Status: 'Urgente', Subject: 'Problema com a impressora não reconhecida.', email: 'cersei@example.com' },
  { id: 12, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 45, Status: 'Urgente', Subject: 'Troca de tamanho de vestuário.', email: 'jaime@example.com' },
  { id: 13, Resp: 'Bruno', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 16, Status: 'Urgente', Subject: 'Endereço de entrega incorreto, favor retificar', email: 'arya@example.com' },
  { id: 14, Resp: 'Esther', tickets: 'Ticket Atendimento - Troca de produto', Number: 18, Status: 'Urgente', Subject: 'roduto danificado durante o transporte, necessito de substituição.', email: 'daenerys@example.com' },
  { id: 15, Resp: 'Bruno', tickets: 'Ticket Atendimento - Suporte técnico', Number: 150, Status: 'Urgente', Subject: 'Erro ao acessar o site', email: 'melisandre@example.com' },
  { id: 16, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 44, Status: 'Urgente', Subject: 'Pedido não recebido dentro do prazo estipulado', email: 'clifford@example.com' },
  { id: 17, Resp: 'Lucas', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 36, Status: 'Urgente', Subject: 'Informações sobre a transportadora responsável pela entrega.', email: 'frances@example.com' },
  { id: 18, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 65, Status: 'Urgente', Subject: 'Solicitação de troca do produto com defeito', email: 'roxie@example.com' },
  { id: 19, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 35, Status: 'Urgente', Subject: 'Pedido #123456 - Status de entrega e previsão de chegada', email: 'jon@example.com' },
  { id: 20, Resp: 'Lucas', tickets: 'Ticket Atendimento - Suporte técnico', Number: 42, Status: 'Urgente', Subject: 'Problema com a impressora não reconhecida.', email: 'cersei@example.com' },
  { id: 21, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 45, Status: 'Urgente', Subject: 'Troca de tamanho de vestuário.', email: 'jaime@example.com' },
  { id: 22, Resp: 'Bruno', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 16, Status: 'Urgente', Subject: 'Endereço de entrega incorreto, favor retificar', email: 'arya@example.com' },
  { id: 23, Resp: 'Esther', tickets: 'Ticket Atendimento - Troca de produto', Number: 120, Status: 'Urgente', Subject: 'roduto danificado durante o transporte, necessito de substituição.', email: 'daenerys@example.com' },
  { id: 24, Resp: 'Bruno', tickets: 'Ticket Atendimento - Suporte técnico', Number: 150, Status: 'Urgente', Subject: 'Erro ao acessar o site', email: 'melisandre@example.com' },
  { id: 25, Resp: 'Esther', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 44, Status: 'Urgente', Subject: 'Pedido não recebido dentro do prazo estipulado', email: 'clifford@example.com' },
  { id: 26, Resp: 'Lucas', tickets: 'Ticket Atendimento - Acompanhamento de entrega', Number: 36, Status: 'Urgente', Subject: 'Informações sobre a transportadora responsável pela entrega.', email: 'frances@example.com' },
  { id: 27, Resp: 'Pedro', tickets: 'Ticket Atendimento - Troca de produto', Number: 65, Status: 'Urgente', Subject: 'Solicitação de troca do produto com defeito', email: 'roxie@example.com' },
];

const DataTableContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: 600,
  width: '100%',
  backgroundColor: (theme) => theme.palette.background.paper,
});

const Title = styled(Typography)({
  marginBottom: 16,
  fontWeight: 'bold',
});

const TooltipCell = styled(Tooltip)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function DataTable() {
  const renderTooltipCell = (params) => {
    return (
      <TooltipCell title={params.value}>
        <span>{params.value}</span>
      </TooltipCell>
    );
  };

  return (
    <DataTableContainer>
      <Title variant="h4" component="div">
        Tickets
      </Title>
      <DataGrid
        rows={rows}
        columns={columns.map((column) => ({
          ...column,
          renderCell: renderTooltipCell,
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </DataTableContainer>
  );
}



