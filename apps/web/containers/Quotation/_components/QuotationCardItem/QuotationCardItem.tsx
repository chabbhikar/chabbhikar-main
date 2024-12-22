import { Card, HStack, IconButton } from "@chakra-ui/react"

export function QuotationCardItem(props: TProps) {
    return (<Card.Root width="320px" rounded='xl'>
        <Card.Body gap="2" gapY={5}>
            <Card.Title mt="2">
                <HStack gap={4}>
                    STEP
                    <IconButton size='sm' background='white' border={'1px solid black'} color='black' rounded='full'>
                        {props.index}
                    </IconButton>
                </HStack>
            </Card.Title>
            <Card.Description textTransform='uppercase'>
                CHOOSE YOUR <strong>{props.remark}</strong>
            </Card.Description>
        </Card.Body>
    </Card.Root>
    )
}
type TProps = { index: number, remark: string }
