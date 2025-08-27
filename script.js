const out = items.map((item) => {
  const dados = item.json?.body ?? item.json ?? {};

  // is Group
  const phoneStr = String(dados.phone ?? "");
  const isGroup = phoneStr.endsWith("-group");

  // from me (o dado pode vir tanto na forma booleana, string ou numérica)
  const fm = dados.fromMe;
  const fromMe = fm === true || fm === "true" || fm === 1 || fm === "1";

  // campos
  const groupId = phoneStr;
  const groupName = String(dados.chatName ?? "");
  const senderId = String(dados.participantPhone ?? "");
  const senderPhone = senderId;
  const senderName = String(dados.senderName ?? "");
  const messageText =
    dados.text && typeof dados.text.message === "string"
      ? dados.text.message
      : "";

  return {
    json: {
      isGroup,
      groupId,
      groupName,
      senderId,
      senderPhone,
      senderName,
      messageText,
      fromMe,
    },
  };
});

return out;
