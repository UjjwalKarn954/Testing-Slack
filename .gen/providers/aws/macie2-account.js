"use strict";
// https://www.terraform.io/docs/providers/aws/r/macie2_account.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Macie2Account = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account}
*/
var Macie2Account = /** @class */ (function (_super) {
    __extends(Macie2Account, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2AccountConfig = {}
    */
    function Macie2Account(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_macie2_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._findingPublishingFrequency = config.findingPublishingFrequency;
        _this._status = config.status;
        return _this;
    }
    Object.defineProperty(Macie2Account.prototype, "createdAt", {
        // ==========
        // ATTRIBUTES
        // ==========
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Account.prototype, "findingPublishingFrequency", {
        get: function () {
            return this.getStringAttribute('finding_publishing_frequency');
        },
        set: function (value) {
            this._findingPublishingFrequency = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Account.prototype.resetFindingPublishingFrequency = function () {
        this._findingPublishingFrequency = undefined;
    };
    Object.defineProperty(Macie2Account.prototype, "findingPublishingFrequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._findingPublishingFrequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Account.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Account.prototype, "serviceRole", {
        // service_role - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_role');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Account.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Macie2Account.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(Macie2Account.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Macie2Account.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Macie2Account.prototype.synthesizeAttributes = function () {
        return {
            finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
            status: cdktf.stringToTerraform(this._status)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Macie2Account.tfResourceType = "aws_macie2_account";
    return Macie2Account;
}(cdktf.TerraformResource));
exports.Macie2Account = Macie2Account;
