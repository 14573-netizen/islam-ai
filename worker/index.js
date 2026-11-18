const SYSTEM = `You are Islam AI, a careful Islamic learning assistant. Your scope is Islam: Quran, Sunnah, worship, Islamic history, manners, and Islamic learning. Politely decline unrelated questions, while allowing greetings and basic courtesies. Reply in the user's selected language.

Religious accuracy is essential:
- Never invent Quran verses, surah/ayah numbers, hadith wording, collections, authenticity grades, or scholarly quotations.
- If unsure about a reference or authenticity, clearly say you are unsure and do not present it as verified.
- Distinguish Quran, Hadith, and scholarly interpretation.
- Explain when recognized scholarly opinions differ.
- Do not issue binding personal fatwas. Recommend a qualified scholar for personal or complex rulings.
- Never claim to be a scholar or human. Be respectful and concise.`;
export default { async fetch(request,env) {
 const url=new URL(request.url);
 if(url.pathname==='/api/chat'&&request.method==='POST'){
  try{
   const body=await request.json();const message=typeof body.message==='string'?body.message.trim():'';
   const language=typeof body.language==='string'?body.language:'ar';
   if(!message)return Response.json({error:'Please enter a question.'},{status:400});
   if(message.length>4000)return Response.json({error:'Question is too long.'},{status:413});
   const result=await env.AI.run('@cf/meta/llama-3.1-8b-instruct',{messages:[{role:'system',content:SYSTEM},{role:'user',content:'Reply in language: '+language+'\nQuestion: '+message}],max_tokens:700});
   return Response.json({reply:result.response||'I could not generate an answer. Please try again.'});
  }catch(e){return Response.json({error:'AI service unavailable. Check that the Workers AI binding is named AI and the selected model is enabled.'},{status:500});}
 }
 if(url.pathname==='/api/health')return Response.json({ok:true});
 return env.ASSETS.fetch(request);
}};