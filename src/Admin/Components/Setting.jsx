import React from 'react'

const Setting = () => {
  return (
    <>
    
    <div className="ui-theme-settings">
            <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
                <i className="fa fa-cog fa-w-16 fa-spin fa-2x"></i>
            </button>
            <div className="theme-settings__inner">
                <div className="scrollbar-container">
                    <div className="theme-settings__options-wrapper">
                        <h3 className="themeoptions-heading">Layout Options
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-className" data-className="fixed-header">
                                                    <div className="switch-animate switch-on">
                                                        <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Header
                                                </div>
                                                <div className="widget-subheading">Makes the header top fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-className" data-className="fixed-sidebar">
                                                    <div className="switch-animate switch-on">
                                                        <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Sidebar
                                                </div>
                                                <div className="widget-subheading">Makes the sidebar left fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left mr-3">
                                                <div className="switch has-switch switch-container-className" data-className="fixed-footer">
                                                    <div className="switch-animate switch-off">
                                                        <input type="checkbox" data-toggle="toggle" data-onstyle="success" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-left">
                                                <div className="widget-heading">Fixed Footer
                                                </div>
                                                <div className="widget-subheading">Makes the app footer bottom fixed, always visible!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>
                                Header Options
                            </div>
                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-className" data-className="">
                                Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Choose Color Scheme
                                    </h5>
                                    <div className="theme-settings-swatches">
                                        <div className="swatch-holder bg-primary switch-header-cs-className" data-className="bg-primary header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-secondary switch-header-cs-className" data-className="bg-secondary header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-success switch-header-cs-className" data-className="bg-success header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-info switch-header-cs-className" data-className="bg-info header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-warning switch-header-cs-className" data-className="bg-warning header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-danger switch-header-cs-className" data-className="bg-danger header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-light switch-header-cs-className" data-className="bg-light header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-dark switch-header-cs-className" data-className="bg-dark header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-focus switch-header-cs-className" data-className="bg-focus header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-alternate switch-header-cs-className" data-className="bg-alternate header-text-light">
                                        </div>
                                        <div className="divider">
                                        </div>
                                        <div className="swatch-holder bg-vicious-stance switch-header-cs-className" data-className="bg-vicious-stance header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-midnight-bloom switch-header-cs-className" data-className="bg-midnight-bloom header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-night-sky switch-header-cs-className" data-className="bg-night-sky header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-slick-carbon switch-header-cs-className" data-className="bg-slick-carbon header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-asteroid switch-header-cs-className" data-className="bg-asteroid header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-royal switch-header-cs-className" data-className="bg-royal header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-warm-flame switch-header-cs-className" data-className="bg-warm-flame header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-night-fade switch-header-cs-className" data-className="bg-night-fade header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-sunny-morning switch-header-cs-className" data-className="bg-sunny-morning header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-tempting-azure switch-header-cs-className" data-className="bg-tempting-azure header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-amy-crisp switch-header-cs-className" data-className="bg-amy-crisp header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-heavy-rain switch-header-cs-className" data-className="bg-heavy-rain header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-mean-fruit switch-header-cs-className" data-className="bg-mean-fruit header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-malibu-beach switch-header-cs-className" data-className="bg-malibu-beach header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-deep-blue switch-header-cs-className" data-className="bg-deep-blue header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-ripe-malin switch-header-cs-className" data-className="bg-ripe-malin header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-arielle-smile switch-header-cs-className" data-className="bg-arielle-smile header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-plum-plate switch-header-cs-className" data-className="bg-plum-plate header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-happy-fisher switch-header-cs-className" data-className="bg-happy-fisher header-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-happy-itmeo switch-header-cs-className" data-className="bg-happy-itmeo header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-mixed-hopes switch-header-cs-className" data-className="bg-mixed-hopes header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-strong-bliss switch-header-cs-className" data-className="bg-strong-bliss header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-grow-early switch-header-cs-className" data-className="bg-grow-early header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-love-kiss switch-header-cs-className" data-className="bg-love-kiss header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-premium-dark switch-header-cs-className" data-className="bg-premium-dark header-text-light">
                                        </div>
                                        <div className="swatch-holder bg-happy-green switch-header-cs-className" data-className="bg-happy-green header-text-light">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Sidebar Options</div>
                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-className" data-className="">
                                Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Choose Color Scheme
                                    </h5>
                                    <div className="theme-settings-swatches">
                                        <div className="swatch-holder bg-primary switch-sidebar-cs-className" data-className="bg-primary sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-secondary switch-sidebar-cs-className" data-className="bg-secondary sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-success switch-sidebar-cs-className" data-className="bg-success sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-info switch-sidebar-cs-className" data-className="bg-info sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-warning switch-sidebar-cs-className" data-className="bg-warning sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-danger switch-sidebar-cs-className" data-className="bg-danger sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-light switch-sidebar-cs-className" data-className="bg-light sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-dark switch-sidebar-cs-className" data-className="bg-dark sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-focus switch-sidebar-cs-className" data-className="bg-focus sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-alternate switch-sidebar-cs-className" data-className="bg-alternate sidebar-text-light">
                                        </div>
                                        <div className="divider">
                                        </div>
                                        <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-className" data-className="bg-vicious-stance sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-className" data-className="bg-midnight-bloom sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-night-sky switch-sidebar-cs-className" data-className="bg-night-sky sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-className" data-className="bg-slick-carbon sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-asteroid switch-sidebar-cs-className" data-className="bg-asteroid sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-royal switch-sidebar-cs-className" data-className="bg-royal sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-warm-flame switch-sidebar-cs-className" data-className="bg-warm-flame sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-night-fade switch-sidebar-cs-className" data-className="bg-night-fade sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-className" data-className="bg-sunny-morning sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-className" data-className="bg-tempting-azure sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-className" data-className="bg-amy-crisp sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-className" data-className="bg-heavy-rain sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-className" data-className="bg-mean-fruit sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-className" data-className="bg-malibu-beach sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-deep-blue switch-sidebar-cs-className" data-className="bg-deep-blue sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-className" data-className="bg-ripe-malin sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-className" data-className="bg-arielle-smile sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-plum-plate switch-sidebar-cs-className" data-className="bg-plum-plate sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-className" data-className="bg-happy-fisher sidebar-text-dark">
                                        </div>
                                        <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-className" data-className="bg-happy-itmeo sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-className" data-className="bg-mixed-hopes sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-className" data-className="bg-strong-bliss sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-grow-early switch-sidebar-cs-className" data-className="bg-grow-early sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-love-kiss switch-sidebar-cs-className" data-className="bg-love-kiss sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-premium-dark switch-sidebar-cs-className" data-className="bg-premium-dark sidebar-text-light">
                                        </div>
                                        <div className="swatch-holder bg-happy-green switch-sidebar-cs-className" data-className="bg-happy-green sidebar-text-light">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h3 className="themeoptions-heading">
                            <div>Main Content Options</div>
                            <button type="button" className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm">Restore Default
                            </button>
                        </h3>
                        <div className="p-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <h5 className="pb-2">Page Section Tabs
                                    </h5>
                                    <div className="theme-settings-swatches">
                                        <div role="group" className="mt-2 btn-group">
                                            <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-className" data-className="body-tabs-line">
                                                Line
                                            </button>
                                            <button type="button" className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-className" data-className="body-tabs-shadow">
                                                Shadow
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Setting