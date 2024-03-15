import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/ItemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStart());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        
        dispatch(itemsActions.addInitialItems(data.items));
        
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinish());

        // console.log(fetchStatus);

        // console.log(fetchStatus);
        
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>
};

export default FetchItems;
