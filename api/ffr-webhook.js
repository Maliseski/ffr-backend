export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    console.log('Recebido do Lovable:', data);

    // ⚠️ Aqui ainda NÃO vamos chamar OpenAI
    // Só vamos testar o fluxo

    return res.status(200).json({
      message: 'Webhook recebido com sucesso',
      received: data
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno' });
  }
}
