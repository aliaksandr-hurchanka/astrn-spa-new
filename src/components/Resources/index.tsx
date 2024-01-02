import { ChipsLabelStyled } from "../../common/components/chips-label";
import { Col } from "../../common/components/grid";
import { Progress } from "../Progress";
import { ColStyled, DetailsButtonStyled, LinkStyled, ResourceNameStyled, ResourceStyled, ResourcesListStyled, RowStyled } from "./styled";

export function ResourcesList({ resources }: any) {
  return (
    <ResourcesListStyled>
      {resources.map(({ id, name, countChips, variants, baseValueCooler, boostValueCooler, baseValueWater, boostValueWater }: any) => {
        return (
          <ResourceStyled key={id}>
            <LinkStyled to={`/resources/${id}`}>
              <RowStyled>
                <Col lg={4} md={8} sm={4}>
                  <ResourceNameStyled>
                    {name}
                    {countChips && <ChipsLabelStyled>
                      {countChips} chips
                    </ChipsLabelStyled>}
                    <span>{variants}Th</span>
                  </ResourceNameStyled>
                </Col>
                <ColStyled lg={3} md={3} sm={4}>
                  {baseValueCooler && <Progress baseValue={baseValueCooler} boostValue={boostValueCooler} />}
                </ColStyled>
                <ColStyled lg={3} md={4} sm={4}>
                  {baseValueWater && <Progress baseValue={baseValueWater} boostValue={boostValueWater} isWater />}
                </ColStyled>
                <ColStyled lg={2} md={1} sm={4} alignItems='center' justifyContent='flex-end'>
                  <DetailsButtonStyled>
                    See details
                  </DetailsButtonStyled>
                </ColStyled>
              </RowStyled>
            </LinkStyled>
          </ResourceStyled>
        );
      })}
    </ResourcesListStyled>
  );
}