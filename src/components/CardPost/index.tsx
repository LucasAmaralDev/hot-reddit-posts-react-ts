import { Button } from "@mui/material";

export default function CardPost(props: any) {
    return (
        <>
            <div key={props.post.id} className="w-full bg-stone-100 rounded py-3 px-4 shadow-md shadow-zinc-300 my-2">

                <div className="flex w-full justify-center py-2">
                    <h1 className="text-xl font-semibold text-orange-700 text-center">{props.post.titulo}</h1>
                </div>

                <div className="flex w-full justify-between">
                    <p className="text-sm">Autor: {props.post.autor}</p>
                    <p className="text-sm">Data: {props.post.data_adicionado}</p>
                </div>

                <div className="flex w-full flex-col py-2">{
                    props.post.conteudo && props.post.conteudo.split('\n').map((paragrafo: string | number | null) => {
                        return <p className="text-lg">{paragrafo}</p>
                    })
                }
                </div>

                <div className="flex w-full justify-center ">
                    <p>{props.post.quantidade_comentarios} comentarios</p>
                </div>

                <div className="flex w-full justify-center">
                    <Button variant="contained" color="secondary" onClick={() =>{ window.location.href = props.post.link_publicacao}}>Ver No Reddit</Button>
                </div>

            </div>
        </>
    )
}
