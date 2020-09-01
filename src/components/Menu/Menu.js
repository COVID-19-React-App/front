import React from "react";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
  Icon28GlobeOutline,
  Icon28GraphOutline,
  Icon28StatisticsOutline,
  Icon28HomeOutline,
} from "@vkontakte/icons";
import "./Menu.css";
import { withRouter } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: "statistic",
    };

    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange(e) {
    let nextStory = e.currentTarget.dataset.story;
    this.setState({ activeStory: nextStory });
    if (`/${nextStory}` !== this.props.history.location.pathname) {
      this.props.history.push(`/${e.currentTarget.dataset.story}`);
    }
  }

  render() {
    return (
      <Tabbar className="menu">
        <TabbarItem
          onClick={this.onStoryChange}
          selected={this.state.activeStory === ""}
          data-story=""
          text="Сводка"
        >
          <Icon28GraphOutline />
        </TabbarItem>
        <TabbarItem
          onClick={this.onStoryChange}
          selected={this.state.activeStory === "chronology"}
          data-story="chronology"
          text="Хронология"
        >
          <Icon28StatisticsOutline />
        </TabbarItem>

        <TabbarItem
          onClick={this.onStoryChange}
          selected={this.state.activeStory === "countries"}
          data-story="countries"
          text="Страны"
        >
          <Icon28GlobeOutline />
        </TabbarItem>

        <TabbarItem
          onClick={this.onStoryChange}
          selected={this.state.activeStory === "my_country"}
          data-story="my_country"
          text="В моей стране"
        >
          <Icon28HomeOutline />
        </TabbarItem>
      </Tabbar>
    );
  }
}

export default withRouter(Menu);
