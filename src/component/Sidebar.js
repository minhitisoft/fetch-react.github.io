import React, { Component } from "react";

class Sidebar extends Component {
    state = {
        key: '',
    }


    handleChange = (e) => {
        this.setState({
            key: e.target.value
        });
    }
    searchSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state);
    }
    render() {
        return (
            <div className="sidebar">
                <div id="eysabout_widget-2" className="clearfix widget eysabout_widget">
                    <img src="https://www.eatyourselfskinny.com/wp-content/uploads/2016/02/Headshot.jpg" alt="" />
                    <div className="inner-border" />
                    <a href="https://www.eatyourselfskinny.com/about/meet-kelly">
                        <span>Meet Kelly</span>
                    </a>
                </div>
                <div id="search-3" className="clearfix widget widget_search">
                    <form method="get" id="searchform" onSubmit={this.searchSubmit.bind(this)}>
                        <input type="text" defaultValue="Search" name="s" id="s" onChange={this.handleChange.bind(this)}/>
                        <input type="submit" id="searchsubmit" defaultValue="Search" />
                    </form>
                </div>
                <div id="eyssubscription_widget-2" className="clearfix widget eyssubscription_widget">
                    <div className="inner">
                        <h3>
                            <span>SUBSCRIBE BY EMAIL</span>
                        </h3>
                        <p>to stay in the loop on new recipes!</p>
                        <div className="gf_browser_safari gf_browser_iphone gform_wrapper" id="gform_wrapper_2">
                            <div id="gf_2" className="gform_anchor" tabIndex={-1} />
                            <form method="post" encType="multipart/form-data" target="gform_ajax_frame_2" id="gform_2"
                                action="/blog/#gf_2">
                                <div className="gform_body">
                                    <ul id="gform_fields_2"
                                        className="gform_fields top_label form_sublabel_below description_below">
                                        <li id="field_2_1"
                                            className="gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                                            <label className="gfield_label" htmlFor="input_2_1">
                                                Email<span className="gfield_required">*</span>
                                            </label>
                                            <div className="ginput_container ginput_container_email">
                                                <input name="input_1" id="input_2_1" type="text" defaultValue className="medium"
                                                    tabIndex={10} placeholder="email address..." aria-required="true"
                                                    aria-invalid="false" />
                                            </div>
                                        </li>
                                        <li id="field_2_2"
                                            className="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible">
                                            <label className="gfield_label" htmlFor="input_2_2">Name</label>
                                            <div className="ginput_container">
                                                <input name="input_2" id="input_2_2" type="text" defaultValue />
                                            </div>
                                            <div className="gfield_description" id="gfield_description__2">
                                                This field is for validation purposes and should be left
                                                unchanged.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="gform_footer top_label">
                                    <input type="submit" id="gform_submit_button_2" className="gform_button button"
                                        defaultValue="Subscribe" tabIndex={11}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="eysfavorites_widget-2" className="clearfix widget eysfavorites_widget jpibfi_container">
                    <h3>
                        <span>Favorite Recipes</span>
                    </h3>
                    
                </div>
            </div>
        );
    }
}

export default Sidebar;
