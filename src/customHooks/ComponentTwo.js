import useWindowWidth from './useWindowWidth';
export default function ComponentTwo(){
    const onSmallScreen =  useWindowWidth(700);
    return(
        <div className={onSmallScreen ? 'Small' : 'large'}>
            <h1>
                This is another component
            </h1>
        </div>
    )
}