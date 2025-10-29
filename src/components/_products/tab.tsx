import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const ProductsTab = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex w-full ">
        <TabsTrigger value="tab1" className="flex flex-1">
          Tab1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex flex-1">
          Tab2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Conteudo da Tab 1</TabsContent>
      <TabsContent value="tab2">Conteudo da Tab 2</TabsContent>
    </Tabs>
  );
};
