import CardComponent from "@/components/CardComponent";

export default function JobOpportunity(){
    return(
        <div className="my-8 p-8 container mx-auto">
            <div>
                <h1 className="uppercase text-2xl font-bold">Useful Content</h1>
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-4">
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </div>
        </div>
    )
}