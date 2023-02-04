import Content from './Content';
export default function Section(){
    console.log('Section render');
    return (
        <div>
            <h1>This is a section</h1>
            <Content/>
        </div>
    );
}