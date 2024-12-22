import { Box, ClientOnly, Skeleton } from "@chakra-ui/react";

import { Quotation as QuotationContainer } from "../../containers/Quotation";

export default async function Quotation() {
    return (<Box fontSize="xl">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
            <QuotationContainer />
        </ClientOnly>
    </Box>
    );
}
